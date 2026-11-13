/**
 * Runs one of this project's commands on a Node that can actually parse it.
 *
 * The default `node` on this machine is v12, which cannot read the ESM and
 * modern syntax that vite and the media scripts are written in: it fails at
 * parse time with a bare SyntaxError that says nothing about the cause. So
 * every script goes through here first. If the Node already running is new
 * enough the command runs untouched, which is what happens in CI; otherwise
 * a newer Node is found and put at the front of PATH, so `node`, `vite` and
 * `tsc` all resolve to it.
 *
 * This file stays CommonJS, and ES2018 at the newest, because v12 has to be
 * able to parse the thing that works around v12.
 *
 *   node scripts/run.cjs vite build
 */
var cp = require('child_process');
var fs = require('fs');
var path = require('path');

var MIN_MAJOR = 18;
var root = path.resolve(__dirname, '..');

function majorOf(version) {
  var m = /^v?(\d+)\./.exec(String(version).trim());
  return m ? Number(m[1]) : 0;
}

/** The newest Node on this machine that is new enough, or '' if none is. */
function findNode() {
  if (majorOf(process.versions.node) >= MIN_MAJOR) return path.dirname(process.execPath);

  var candidates = [];
  var nvm = path.join(process.env.HOME || '', '.nvm/versions/node');
  if (fs.existsSync(nvm)) {
    fs.readdirSync(nvm).forEach(function (v) {
      candidates.push({ major: majorOf(v), bin: path.join(nvm, v, 'bin') });
    });
  }
  ['/opt/homebrew/bin', '/usr/local/bin', '/usr/bin'].forEach(function (bin) {
    if (!fs.existsSync(path.join(bin, 'node'))) return;
    var out = cp.spawnSync(path.join(bin, 'node'), ['-v'], { encoding: 'utf8' });
    candidates.push({ major: majorOf(out.stdout || ''), bin: bin });
  });

  var usable = candidates.filter(function (c) {
    return c.major >= MIN_MAJOR && fs.existsSync(path.join(c.bin, 'node'));
  });
  usable.sort(function (a, b) { return b.major - a.major; });
  return usable.length ? usable[0].bin : '';
}

var args = process.argv.slice(2);
if (!args.length) {
  console.error('usage: node scripts/run.cjs <command…>');
  process.exit(1);
}

var bin = findNode();
if (!bin) {
  console.error(
    'This project needs Node ' + MIN_MAJOR + ' or newer; the one running is v' +
    process.versions.node + ' and no newer one was found.\n' +
    'Install one with `nvm install 24`, then run this again.',
  );
  process.exit(1);
}

var env = Object.assign({}, process.env);
env.PATH = bin + path.delimiter + env.PATH;

// run from the project root, so the command works from any subdirectory
var r = cp.spawnSync(args.join(' '), { cwd: root, env: env, shell: true, stdio: 'inherit' });
process.exit(r.status === null ? 1 : r.status);

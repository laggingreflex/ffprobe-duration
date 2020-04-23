const assert = require('assert')
const getVideoDuration = require('.');

const testUrl = 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4';
const testUrlDuration = 634.533333;

async function test() {
  const duration = await getVideoDuration(testUrl);
  assert.equal(duration, testUrlDuration);
}

test().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

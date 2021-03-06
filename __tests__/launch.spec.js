import { goto, loadPlugin, click } from 'taiko';
import {
  ID,
  clientHandler,
  openAndroidBrowser,
  closeAndroidBrowser
} from '../src/index';

loadPlugin(ID, clientHandler);

jest.setTimeout(30000);
beforeEach(async () => {
  await openAndroidBrowser();
});

afterEach(async () => {
  await closeAndroidBrowser();
});
test('Should return speedindex and perceptualSpeedIndex', async () => {
  await goto('http://github.com');
  await click('Sign up');
});

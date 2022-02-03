describe('App', () => {
  beforeAll(async () => {
  await device.launchApp();
});

// beforeEach(async () => {
//   await device.reloadReactNative();
// });

  it('should show the popular view screen', async () => {
    await expect(element(by.id('popularView'))).toBeVisible();
  });

  it('should open the myMovies screen', async () => {
    await element(by.id('openMyMovies')).tap();
  });

  it('should open the addMoviesScreen screen', async () => {
    await element(by.id('openAddMovie')).tap();
  });

  it('should show the addMovie  screen', async () => {
    await expect(element(by.id('addMovies'))).toBeVisible();
  });


});
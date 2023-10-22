interface IRoute {
  name: string;
  path: string;
}

export const Routes: IRoute[] = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/collection' },
  { name: 'Rotation', path: '/rotation' }
];

export const partialAuthRoutes: string[] = ['/auth/create-profile', '/auth/signout'];

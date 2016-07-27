const specFiles: string[] = [
  './app/app.component.spec',
  './dashboard/dashboard.component.spec',
  './hero-detail/hero-detail.component.spec',
  // './hero-list/heroes.component.spec',
];

specFiles.forEach(file => require(file));
const redirects = new Map([
  ['/', '/en'],
  ['/projects', '/en/projects'],
  ['/architectures', '/en/architectures'],
  ['/about', '/en/about'],
  ['/blog', '/en/notes'],
  ['/notes', '/en/notes'],
  ['/contact', '/en/contact'],
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const destination = redirects.get(url.pathname);

    if (destination) {
      url.pathname = destination;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};

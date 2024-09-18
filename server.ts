const port = 8080;

const handler = (request: Request): Response => {
  const body = `Your user-agent is:\n\n${
    console.log(request)
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP server running. Access it at: http://localhost:${port}/`);
Deno.serve({ port }, handler);

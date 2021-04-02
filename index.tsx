import { serve, Server, ServerRequest, Response } from "https://deno.land/std/http/server.ts"
const server: Server = serve({ port: 8000 })
for await (const req: ServerRequest of server) {
  const res: Response = {
    body: "<html><body>Hello World</body></html>\n"
  }
  req.respond(res)
}
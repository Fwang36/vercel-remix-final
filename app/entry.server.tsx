import { renderToString } from "react-dom/server";
// import { RemixServer } from "remix";
// import type { EntryContext } from "remix";
import * as Sentry from "@sentry/remix";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  // remixContext: EntryContext
) {
  // let markup = renderToString(
  //   // <RemixServer context={remixContext} url={request.url} />
  // );

  Sentry.init({
    dsn: "https://f5ea3254102d4890aff3291dce1e1478:63cec28b01e34b5b96227602629fc651@o1407376.ingest.sentry.io/4504606337007616",
    tracesSampleRate: 1,
    debug: true
  });

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>", {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

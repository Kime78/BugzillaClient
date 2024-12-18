import createClient from "openapi-fetch";
import type { paths } from "../generated/bugzilla"; // generated by openapi-typescript

export const api = createClient<paths>({
  baseUrl: "https://bugzilla.kernel.org/rest/",
});

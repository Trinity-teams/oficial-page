import { sanityClient } from "@/config/sanity-client";
import { IProject } from "@/interfaces/project.interface";

const projectQuery = `
    *[_type == "project"] {
        _id,
        title,
        date,
        route,
        tags,
        image,
        description,
        bgColor
    }
`;

export default class ProjectService {
  async getProjects() {
    const _fetch = sanityClient.createApiUtil<IProject[]>(projectQuery, {
      cache: "no-store",
    });

    return await _fetch();
  }
}

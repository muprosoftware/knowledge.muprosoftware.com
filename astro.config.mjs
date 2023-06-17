import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Knowledge",
      description: "Knowledge for MuPRO",
      social: {
        github: "https://github.com/muprosoftware",
      },
      editLink: {
        baseUrl: 'https://github.com/muprosoftware/knowledge.muprosoftware.com/edit/main/',
      },
      sidebar: [
        {
          label: "Prepare",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", link: "/en/introduction/" },
            { label: "MuPRO License", link: "/en/prepare/license" },
            { label: "User setup", link: "/en/prepare/user/" },
            { label: "Obtain trial license", link: "/en/prepare/trial/" },
          ],
        },
        {
          label: "Run simulation",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Linux Basics", link: "/en/simulation/linux/" },
            { label: "Start Simulation", link: "/en/simulation/run/" },
          ],
        },
        {
          label: "Program customization",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Git", link: "en/programming/git" },
            { label: "CMake", link: "en/programming/cmake" },
            { label: "Versioning", link: "en/programming/versioning" },
            { label: "CICD", link: "en/programming/cicd" },
            { label: "Documentation", link: "en/programming/docs" },
            { label: "Fortran", link: "en/programming/fortran" },
            { label: "General Workflow", link: "en/programming/workflow" },
            { label: "Collaboration", link: "en/programming/contribute" },
            { label: "Best practices", link: "en/programming/recommendation" },
          ],
        },
        {
          label: "MuPRO contributor",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Developer setup", link: "/en/developer/developer/" },
          ],
        },
        {
          label: "Reference",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Acknowledgement", link: "/en/reference/acknowledgement/" },
            { label: "Citation", link: "/en/reference/citation/" },
            { label: "Q & A", link: "/en/reference/questions/" },
            { label: "Next steps", link: "/en/reference/next_step/" },
          ],
        }
      ],
      customCss: ['/src/assets/landing.css'],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});

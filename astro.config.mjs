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
            { label: "Collaboration", link: "en/programming/contribute" },
            { label: "Best practices", link: "en/programming/recommendation" },
          ],
        },
        {
          label: "MuPRO contributor",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "For Developer", link: "/en/developer/developer/" },
          ],
        },
        {
          label: "Reference",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Q & A", link: "/en/reference/questions/" },
          ],
        }
      ],
      customCss: ['/src/assets/landing.css'],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});

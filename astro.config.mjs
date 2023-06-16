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
            { label: "For User", link: "/en/prepare/user/" },
            { label: "For Developer", link: "/en/prepare/developer/" },
          ],
        },
        {
          label: "Run simulation",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Linux Basics", link: "/en/simulation/linux/" },
            { label: "Start Simulation", link: "/en/simulation/run/" },
            { label: "Q & A", link: "/en/simulation/questions/" },
          ],
        },
        {
          label: "Programming",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Git", link: "en/programming/git" },
            { label: "CMake", link: "en/programming/cmake" },
            { label: "Versioning", link: "en/programming/versioning" },
            { label: "CICD", link: "en/programming/cicd" },
            { label: "Documentation", link: "en/programming/docs" },
            { label: "Collaboration", link: "en/programming/contribute" },
            { label: "Best practices", link: "en/programming/recommendation" },
          ],
        },
      ],
      customCss: ['/src/assets/landing.css'],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});

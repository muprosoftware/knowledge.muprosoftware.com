import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'MuPRO Knowledge',
      // title: {
      //   root: 'Knowledge',
      //   'zh-CN': '文档',
      // },
      // Set English as the default language for this site.
      // defaultLocale: 'root',
      locales: {
        // English docs in 'src/content/docs/'
        root: {
          label: 'English',
          lang: 'en',
        },
        // Simplified Chinese docs in 'src/content/docs/zh-cn/'
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
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
          translations: {
            // en: 'Prepare',
            'zh-CN': '准备',
          },
          items: [
            {
              label: "Introduction",
              translations: {
                // en: 'Introduction',
                'zh-CN': '介绍',
              },
              link: 'introduction',
            },
            {
              label: "MuPRO License",
              translations: {
                // en: 'MuPRO License',
                'zh-CN' : 'MuPRO 证书',
              },
              link: 'prepare/license',
            },
            {
              label: "User setup",
              translations: {
                // en: 'User setup',
                'zh-CN' : '用户设置',
              },
              link: 'prepare/user',
            },
            {
              label: "Obtain trial license",
              translations: {
                // en: 'Obtain trial license',
                'zh-CN' : '获取试用证书',
              },
              link: "prepare/trial",
            },       
          ],

        },
        {
          label: "Run simulation",
          translations: {
            // en: 'Run simulation',
            'zh-CN': '运行仿真',
          },
          items: [
            {
              label: "Linux Basics",
              translations: {
                // en: 'Linux Basics',
                'zh-CN': 'Linux 基础',
              },
              link: "simulation/linux",
            },
            {
              label: "Start Simulation",
              translations: {
                // en: 'Start Simulation',
                'zh-CN': '开始仿真',
              },
              link: "simulation/run",
            },
          ],
          // autogenerate: { directory: 'simulation' },
        },
        
        {
          label: "Program customization",
          translations: {
            // en: 'Program customization',
            'zh-CN': '程序定制',
          },
          items: [
            {
              label: "Git",
              translations: {
                // en: 'Git',
                'zh-CN': 'Git',
              },
              link: "programming/git",
            },
            {
              label: "CMake",
              translations: {
                // en: 'CMake',
                'zh-CN': 'CMake',
              },
              link: "programming/cmake"
            },
            {
              label: "Versioning",
              translations: {
                // en: 'Versioning',
                'zh-CN': '版本',
              },
              link: "programming/versioning",
            },
            {
              label: "CICD",
              translations: {
                // en: 'CICD',
                'zh-CN': '持续集成与交互',
              },
              link: "programming/cicd",
            },
            {
              label: "Documentation",
              translations: {
                // en: 'Documentation',
                'zh-CN': '文档',
              },
              link: "programming/docs",
            },
            {
              label: "Fortran",
              translations: {
                // en: 'Fortran',
                'zh-CN': 'Fortran',
              },
              link: "programming/fortran",
            },
            {
              label: "General Workflow",
              translations: {
                // en: 'General Workflow',
                'zh-CN': '通用工作流程',
              },
              link: "programming/workflow",
            },
            {
              label: "Collaboration",
              translations: {
                // en: 'Collaboration',
                'zh-CN': '协同开发',
              },
              link: "programming/contribute",
            },
            {
              label: "Best practices",
              translations: {
                // en: 'Best practices',
                'zh-CN': '最佳实践',
              },
              link: "programming/recommendation",
            },
          ],
          // autogenerate: { directory: 'programming' },
        },
        {
          label: "MuPRO contributor",
          translations: {
            // en: 'MuPRO contributor',
            'zh-CN': 'MuPRO 贡献者',
          },
          items: [
            {
              label: "Developer setup",
              translations: {
                // en: 'Developer setup',
                'zh-CN': '开发者设置',
              },
              link: "developer/developer",
            },
            {
              label: "Online document",
              translations: {
                // en: 'Online document',
                'zh-CN': '在线文档',
              },
              link: "developer/document",
            },
          ],
          // autogenerate: { directory: 'developer' },
        },
        {
          label: "Reference",
          translations: {
            // en: 'Reference',
            'zh-CN': '参考',
          },
          items: [
            {
              label: "Acknowledgement",
              translations: {
                // en: 'Acknowledgement',
                'zh-CN': '承认',
              },
              link: "reference/acknowledgement",
            },
            {
              label: "Citation",
              translations: {
                // en: 'Citation',
                'zh-CN': '引用',
              },
              link: "reference/citation",
            },
            {
              label: "Q & A",
              translations: {
                // en: 'Q & A',
                'zh-CN': '问题与答案',
              },
              link: "reference/questions",
            },
            {
              label: "Next steps",
              translations: {
                // en: 'Next steps',
                'zh-CN': '下一步',
              },
              link: "reference/next_step",
            },
          ],
          // autogenerate: { directory: 'reference' },
        },
        {
          label: "Training",
          translations: {
            // en: 'Training',
            'zh-CN': '训练',
          },
          items: [
            {
              label: "Prepare",
              translations: {
                // en: 'Prepare',
                'zh-CN': '准备',
              },
              link: "training/prepare",
            },
            {
              label: "Ferroelectric",
              translations: {
                // en: 'Ferroelectric',
                'zh-CN': '铁电（Ferroelectric）',
              },
              link: "training/ferroelectric",
            },
            {
              label: "Magnetic",
              translations: {
                // en: 'Magnetic',
                'zh-CN': '磁性（Magnetic）',
              },
              link: "training/magnetic",
            },
          ],
          // autogenerate: { directory: 'traning' },
        }
      ],
      customCss: ['/src/assets/landing.css'],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});

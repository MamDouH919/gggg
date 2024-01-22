import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: 'http://accuratess.mywire.org:8003/graphql',
  documents: ["graphql/**/*.graphql"],
  generates: {
    'graphql/types.ts': {
      plugins: ['typescript'],
    },
    'graphql/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
};

// const config: CodegenConfig = {
//   overwrite: true,
//   schema: "https://beta.pokeapi.co/graphql/v1beta",
//   documents: ["components/**/*.graphql"],
//   generates: {
//     "components/types.generated.ts": { plugins: ["typescript"] },
//     "components/": {
//       preset: "near-operation-file",
//       presetConfig: {
//         extension: ".generated.ts",
//         baseTypesPath: "types.generated.ts",
//       },
//       plugins: ["typescript-operations", "typed-document-node"],
//     },
//   },
// };
export default config;

// import type { CodegenConfig } from "@graphql-codegen/cli";

// const config: CodegenConfig = {
//   overwrite: true,
//   schema: "http://accuratess.mywire.org:8003/graphql",
//   documents: ["graphql/**/*.graphql"],
//   generates: {
//     "graphql/types.generated.ts": { plugins: ["typescript"] },
//     "graphql/": {
//       preset: "near-operation-file",
//       presetConfig: {
//         extension: ".generated.ts",
//         baseTypesPath: "types.generated.ts",
//       },
//       plugins: ["typescript-operations", "typed-document-node"],
//     },
//   },
// };

// export default config;


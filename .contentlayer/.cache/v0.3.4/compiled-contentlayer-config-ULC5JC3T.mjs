// contentlayer.config.js
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
var Service = defineDocumentType(() => ({
  name: "Service",
  filePathPattern: "services/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    excerpt: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    image: {
      type: "string",
      description: "The featured image of the post",
      required: true
    },
    category: {
      type: "string",
      description: "The categories of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Service]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ULC5JC3T.mjs.map

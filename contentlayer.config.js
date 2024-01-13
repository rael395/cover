import {
    defineDocumentType,
    makeSource
  } from 'contentlayer/source-files';
  
  const Service = defineDocumentType (() => ({
    name: "Service",
    filePathPattern: 'services/*.mdx',
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        excerpt: {
            type: "string",
            description: "The description of the post",
            required: true,
        },
        image: {
            type: "string",
            description: "The featured image of the post",
            required: true,
        },
        category: {
            type: "string",
            description: "The categories of the post",
            required: true,
        }
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc) => `/${doc._raw.flattenedPath}`,
  
        }
    }
  }));
  
       
  export default makeSource({
    contentDirPath: "content",
    documentTypes: [Service],
  })
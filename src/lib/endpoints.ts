export const endpoints = {
  quiz: {
    all: "/quiz",
    single: (id: string) => `/quiz/${id}`,
    create: "/quiz",
    update: (id: string) => `/quiz/${id}`,
    delete: (id: string) => `/quiz/${id}`,
    archive: (id: string) => `/quiz/${id}/archive`,
    submissions: {
      create: "/submission",
    },
  },
};

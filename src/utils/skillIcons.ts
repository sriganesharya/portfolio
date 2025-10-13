// Mapping of skill names to Simple Icons slugs
// Simple Icons CDN: https://cdn.simpleicons.org/{slug}

export const skillIconMap: Record<string, string> = {
  // Languages
  "Java": "openjdk",
  "C++": "cplusplus",
  "Python": "python",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  
  // Frontend
  "ReactJS": "react",
  "HTML/CSS": "html5",
  
  // Backend
  "Spring Boot": "springboot",
  "Microservices": "microservices",
  "API Gateway": "amazonapigateway",
  "REST APIs": "fastapi",
  "OAuth2": "auth0",
  "JWT": "jsonwebtokens",
  
  // Databases
  "MySQL": "mysql",
  "MariaDB": "mariadb",
  "MongoDB": "mongodb",
  "Redis": "redis",
  
  // Cloud
  "Docker": "docker",
  "OCP": "redhatopenshift",
  "GCP": "googlecloud",
  "PCF": "cloudfoundry",
  "Kubernetes": "kubernetes",
  
  // Tools
  "Jenkins": "jenkins",
  "BitBucket": "bitbucket",
  "GitHub": "github",
  "Kafka": "apachekafka",
  "Elastic Search": "elasticsearch",
};

export const getSkillIcon = (skill: string): string | null => {
  const slug = skillIconMap[skill];
  if (!slug) return null;
  return `https://cdn.simpleicons.org/${slug}`;
};

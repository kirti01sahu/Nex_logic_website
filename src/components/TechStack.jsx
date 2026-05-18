import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      name: 'Frontend',
      tech: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-plain.svg' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-plain.svg' },
      ]
    },
    {
      name: 'Backend',
      tech: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
        { name: 'Python/Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg' },
        { name: 'Java/Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg' },
        { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg' },
        { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg' },
        { name: 'PHP/Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg' },
      ]
    },
    {
      name: 'Mobile',
      tech: [
        { name: 'Android (Java)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
        { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
        { name: 'iOS Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      ]
    },
    {
      name: 'Database',
      tech: [
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg' },
        { name: 'Elasticsearch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original-wordmark.svg' },
      ]
    },
    {
      name: 'Cloud & DevOps',
      tech: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg' },
        { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original-wordmark.svg' },
      ]
    },
    {
      name: 'Tools & Testing',
      tech: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg' },
        { name: 'CI/CD (GitLab)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
        { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
        { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original-wordmark.svg' },
        { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original-wordmark.svg' },
        { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg' },
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-white dark:bg-charcoal">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#2F3B35]/60 dark:text-text-dark-muted mb-4 block">TECHNOLOGY STACK</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#2F3B35] dark:text-sandstone mb-6">
            Cutting-Edge Technologies
          </h2>
          <p className="text-lg text-[#2F3B35]/70 dark:text-text-dark-muted max-w-3xl mx-auto leading-relaxed">
            We leverage industry-leading technologies to build scalable, secure, and high-performance solutions.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="space-y-12 md:space-y-16">
          {techCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-2xl md:text-3xl font-heading font-light text-[#2F3B35] dark:text-sandstone mb-6 md:mb-8">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {category.tech.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center p-4 md:p-6 bg-[#F7F3ED] dark:bg-charcoal-light rounded-lg border border-[#2F3B35]/8 dark:border-white/8 hover:bg-[#E8DDD0] dark:hover:bg-charcoal hover:border-[#2F3B35]/15 dark:hover:border-white/15 transition-all duration-300 hover:shadow-md cursor-pointer hover:scale-105 transform"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-2 md:mb-3">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-full h-full object-contain filter dark:invert dark:opacity-90"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-[#2F3B35] dark:text-sandstone text-center">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-[#2F3B35]/10 dark:border-white/10 text-center">
          <p className="text-[#2F3B35]/70 dark:text-text-dark-muted max-w-2xl mx-auto leading-relaxed">
            Our expertise spans modern frontend frameworks, robust backend systems, mobile development, enterprise databases, and cloud infrastructure. We continuously adopt emerging technologies to deliver innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

import ProjectFlag from './modules/ProjectFlag';

window.onload = () => {
  setTimeout(() => {
    const projectFlags = document.getElementsByClassName('js-project-flag');

    if (projectFlags.length) {
      Array.prototype.filter.call(projectFlags, (projectFlag) => {
        new ProjectFlag(projectFlag).render();
      });
    }

    const projectDynamicFlags = document.getElementsByClassName('js-dynamic-project-flag');

    if (projectDynamicFlags.length) {
      Array.prototype.filter.call(projectDynamicFlags, (projectFlag) => {
        new ProjectFlag(projectFlag).setContent(['Да прибудут', 'С тобой', 'три слова']).render();
      });
    }
  }, 200);
};

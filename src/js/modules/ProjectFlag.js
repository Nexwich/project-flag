/**
 * Создание флага из html элемента
 * @class
 * @example new ProjectFlag(document.document.getElementsById('project-flag')).render();
 */
export default class ProjectFlag {
  /**
   * @constructor
   * @property {Element} element массив html строк
   * @example new ProjectFlag(element).render();
   * @return this
   */
  constructor(element) {
    this.element = element;
    this.innerHTML = null;

    return this;
  }

  /**
   * Заменить контент
   * @method
   * @property {Array} htmlStrings массив html строк
   * @example new ProjectFlag().setContent([$elem.html(), '<a href='/'>Вернуться</a>']).render();
   * @return this
   */
  setContent(htmlStrings = []) {
    this.innerHTML = '';

    htmlStrings.forEach((htmlString) => {
      this.addString(htmlString);
    });

    return this;
  }

  /**
   * Добавить строку в разметку
   * @method
   * @property {String} htmlString html строка
   * @return this
   */
  addString(htmlString) {
    this.innerHTML += `<div class="project-flag--string">${htmlString}</div>`;

    return this;
  }

  /**
   * Собрать все флаги с классом js-project-flag. Ленивый метод. Возвращает true в случае успеха
   * @method
   * @static
   * @example ProjectFlag.build();
   * @return boolean
   */
  static build() {
    const projectFlags = document.getElementsByClassName('js-project-flag');

    if (projectFlags.length) {
      Array.prototype.filter.call(projectFlags, (projectFlag) => {
        new ProjectFlag(projectFlag).render();
      });

      return true;
    }

    return false;
  }

  /**
   * Инициализация флага
   * @method
   * @return this
   */
  init() {
    // Заменить контент если был передан в js
    if (this.innerHTML) {
      this.element.innerHTML = this.innerHTML;
    }

    const html = [];
    const width = this.element.offsetWidth;

    // Фиксировать размер
    this.element.style.width = `${width}px`;
    this.element.style.height = `${this.element.clientHeight}px`;

    const speed = parseInt(this.element.dataset['project-flag-speed'], 10) || 1000;
    const linesCount = 4;

    // Создать копию контента
    for (let i = 0; i < linesCount; i += 1) {
      const additionalClass = `--animation _--delay-${i}`;
      const cssDelay = `animation-delay: -${speed * i}ms;`;
      const cssTime = `animation-duration: ${speed * linesCount}ms;`;

      html.push(`
        <div class="project-flag--strings --active ${additionalClass}" style="${cssDelay} ${cssTime}">
          <div class="project-flag--box ${additionalClass}" style="width: ${`${width}px`}; ${cssDelay} ${cssTime}">
            ${this.element.innerHTML}
          </div>
        </div>`);
    }

    this.element.innerHTML = html.join('');

    return this;
  }

  /**
   * Инициализация флага
   * @method
   */
  render() {
    this.init();
  }
}

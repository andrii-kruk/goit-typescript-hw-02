/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IComponentsProps {
  title: string;
}

class Component<T extends IComponentsProps> {
  constructor(public props: T) {}
}

class PageProps implements IComponentsProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {Page};

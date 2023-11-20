/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IComponentsProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<IComponentsProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { Page };

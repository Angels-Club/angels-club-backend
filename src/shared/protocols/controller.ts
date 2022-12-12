export abstract class ControllerClass<T> {
  abstract handle(...args: any[]): Promise<T>
}

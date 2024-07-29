export interface IUseCase<P, R> {
	Execute(params: P): Promise<R>
}
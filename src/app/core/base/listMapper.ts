export abstract class listMapper<I, O> {
    abstract mapFromList(param: I): O;
}
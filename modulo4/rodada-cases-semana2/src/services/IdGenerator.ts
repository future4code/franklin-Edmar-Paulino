import { v4 } from "uuid";

class IdGenerator {
    public generate = (): string => v4();
}

export default IdGenerator;

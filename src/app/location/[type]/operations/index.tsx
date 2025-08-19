import { cx } from "cva";
import { Carousel } from "./carousel";
import { ModelOperations } from "./model-operations";
import { SubTitle } from "../../../../components/sub-title";

type OperationsProps = {
    model_operations: {
        type: string;
        title: string;
        description: string;
    }[];
};

export const Operations = ({ model_operations }: OperationsProps) => {
    return (
        <section
            id="operations"
            className={cx("bg-blue-900 rounded-t-4xl", "w-full py-14")}
        >
            <div className="container space-y-14.5">
                <ModelOperations model_operations={model_operations} />
                <hr className="text-gray-700" />
                <article className="space-y-12">
                    <SubTitle>O que oferecemos:</SubTitle>
                    <Carousel />
                </article>
            </div>
        </section>
    );
};

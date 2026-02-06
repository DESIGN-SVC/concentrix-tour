import socialAction1 from "@/assets/images/social-actions/social-action-1.png";
import socialAction2 from "@/assets/images/social-actions/social-action-2.jpg";
import socialAction3 from "@/assets/images/social-actions/social-action-3.jpg";

export function SocialActionsPhotos() {
  return (
    <div
      className="xl:-mr-16 pt-5 flex items-center justify-center"
      data-animation="up-3"
    >
      <ul className="grid grid-cols-2 min-[480px]:grid-cols-3 place-items-center sm:grid-cols-4 min-[864px]:grid-cols-2! items-center w-fit gap-5.5">
        <li className="w-32 h-64 md:w-40 md:h-78 rounded-full bg-yellow-500 odd:-mt-16 md:odd:-mt-0 md:even:-mt-39">
          <img
            className="object-bottom object-cover w-full h-full rounded-full"
            src={socialAction1.src}
            alt="Mulher plantando uma muda de árvore"
          />
        </li>
        <li className="w-32 h-64 md:w-40 md:h-78 rounded-full bg-yellow-500 odd:-mt-16 md:odd:-mt-0 md:even:-mt-39"></li>
        <li className="w-32 h-64 md:w-40 md:h-78 rounded-full bg-yellow-500 odd:-mt-16 md:odd:-mt-0 md:even:-mt-39">
          <img
            className="object-bottom object-cover w-full h-full rounded-full"
            src={socialAction2.src}
            alt="Muda de árvore"
          />
        </li>
        <li className="w-32 h-64 md:w-40 md:h-78 rounded-full bg-yellow-500 odd:-mt-16 md:odd:-mt-0 md:even:-mt-39">
          <img
            className="object-bottom object-cover w-full h-full rounded-full"
            src={socialAction3.src}
            alt="Mulher plantando uma muda de árvore"
          />
        </li>
        <li className="w-32 h-64 md:w-40 md:h-78 rounded-full bg-yellow-500 odd:-mt-16 md:odd:-mt-0 md:even:-mt-39"></li>
        <li className="w-32 h-64 md:w-40 md:h-78 rounded-full bg-yellow-500 odd:-mt-16 md:odd:-mt-0 md:even:-mt-39"></li>
      </ul>
    </div>
  );
}

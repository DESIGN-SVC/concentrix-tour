import socialAction1 from "@/assets/images/social-actions/social-action-1.png";
import socialAction2 from "@/assets/images/social-actions/social-action-2.jpg";
import socialAction3 from "@/assets/images/social-actions/social-action-3.jpg";

export function SocialActionsPhotos() {
  return (
    <div className="xl:-mr-16 pt-5">
      <ul className="grid grid-cols-2 w-fit gap-5.5">
        <li className="w-40 h-78 rounded-full bg-yellow-500 even:-mt-39">
          <img
            className="object-bottom object-cover w-full h-full rounded-full"
            src={socialAction1.src}
            alt="Mulher plantando uma muda de árvore"
          />
        </li>
        <li className="w-40 h-78 rounded-full bg-yellow-500 even:-mt-39"></li>
        <li className="w-40 h-78 rounded-full bg-yellow-500 even:-mt-39">
          <img
            className="object-bottom object-cover w-full h-full rounded-full"
            src={socialAction2.src}
            alt="Muda de árvore"
          />
        </li>
        <li className="w-40 h-78 rounded-full bg-yellow-500 even:-mt-39">
          <img
            className="object-bottom object-cover w-full h-full rounded-full"
            src={socialAction3.src}
            alt="Mulher plantando uma muda de árvore"
          />
        </li>
        <li className="w-40 h-78 rounded-full bg-yellow-500 even:-mt-39"></li>
        <li className="w-40 h-78 rounded-full bg-yellow-500 even:-mt-39"></li>
      </ul>
    </div>
  );
}

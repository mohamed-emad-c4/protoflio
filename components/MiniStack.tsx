import { layerNames, type LayerKey } from "../lib/data";

const ORDER: LayerKey[] = ["db", "api", "web", "mobile"];

/* Glass slab plates cut from the same sheet as the hero stack.
   Built layers render in full colour; layers he did not build are ghosted. */
export default function MiniStack({ layers, name }: { layers: Partial<Record<LayerKey, string>>; name: string }) {
  const builtList = ORDER.filter((k) => layers[k])
    .map((k) => `${layerNames[k]}: ${layers[k]}`)
    .join("; ");
  return (
    <figure className="ministack" role="img" aria-label={`Layers built on ${name}: ${builtList}`}>
      <span className="ms-guide ms-guide-l" aria-hidden="true" />
      <span className="ms-guide ms-guide-r" aria-hidden="true" />
      {[...ORDER].reverse().map((k) => {
        const i = ORDER.indexOf(k);
        const lit = Boolean(layers[k]);
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={k}
            src={`/plates/slabs/slab-${k}.png`}
            alt=""
            width={640}
            height={477}
            loading="lazy"
            decoding="async"
            className={`ms-slab ${lit ? "is-lit" : "is-off"}`}
            style={{ ["--i" as string]: i }}
          />
        );
      })}
      <ul className="ms-labels" aria-hidden="true">
        {ORDER.map((k, i) => {
          const lit = Boolean(layers[k]);
          return (
            <li key={k} className={lit ? "is-lit" : "is-off"} style={{ ["--i" as string]: i }}>
              <strong>{layerNames[k]}</strong>
              <span>{lit ? layers[k] : "—"}</span>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}

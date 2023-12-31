import { Hero, Pricing, Testimonials, CTA } from "@/components";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="mx-auto w-4/5 grid grid-cols-3">
        <div className="col bg-white m-8 p-8">
          <div className="flex items-center gap-4 mb-2">
            <span>1.</span>
            <h2 className="text-xl font-bold">Evalua tu Perfil (gratis)</h2>
          </div>
          <p className="text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro animi voluptatum, nobis suscipit quas, placeat nemo aspernatur ipsa iure necessitatibus dolores fugit delectus impedit recusandae quidem vel odit inventore</p>
        </div>
        <div className="col bg-white m-8 p-8">
          <div className="flex items-center gap-4 mb-2">
            <span>1.</span>
            <h2 className="text-xl font-bold">Evalua tu Perfil (gratis)</h2>
          </div>
          <p className="text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro animi voluptatum, nobis suscipit quas, placeat nemo aspernatur ipsa iure necessitatibus dolores fugit delectus impedit recusandae quidem vel odit inventore</p>
        </div>
        <div className="col bg-white m-8 p-8">
          <div className="flex items-center gap-4 mb-2">
            <span>1.</span>
            <h2 className="text-xl font-bold">Evalua tu Perfil (gratis)</h2>
          </div>
          <p className="text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro animi voluptatum, nobis suscipit quas, placeat nemo aspernatur ipsa iure necessitatibus dolores fugit delectus impedit recusandae quidem vel odit inventore</p>
        </div>

      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <CTA />
      </div>
    </div>
  )
}

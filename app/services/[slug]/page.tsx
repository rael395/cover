import { allServices } from ".contentlayer/generated";
import ServiceContent from "./ServiceContent";

export async function generateStaticParams() {
  const services: any = allServices;
  
  return services.map((service: any) => ({ params: { slug: service.slug } }));
}

export const generateMetadata = async ({ params }: { params: any }) => {
  const service = allServices.find(
    (service) => service._raw.flattenedPath === "services/" + params.slug
  );
  return { title: service?.title, excerpt: service?.excerpt };
};

interface ServiceLayoutProps {
  params: any;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ params }) => {
  const service = allServices.find(
    (service) => service._raw.flattenedPath === "services/" + params.slug
  );

  return (
    <>
      {/* Explicitly pass the service prop */}
      <ServiceContent service={service} />
    </>
  );
};

export default ServiceLayout;

// components/ProjectCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ data }) {
  return (
    <Link href={`/articles/${data.slug}`} className="project-card-link">
      <div className="project-card">
        <div className="card-image-container">
          <Image
            src={data.image_url}
            width={632}
            height={400}
            alt={data.client_name}
            className="project-card-image"
          />
          <div className="card-overlay"></div>
          <div className="card-content">
            <div className="content-left">
              <p className="client-name">{data.client_name || "PT. XYZ"}</p>
              <p className="service-type">{data.service || "Social Media and Branding"}</p>
            </div>
            <div className="content-right">
              <div className="agency-wrapper">
                <p className="agency-name">
                  AKAAL<br />Agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
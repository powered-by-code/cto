import React, { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CalculatorPDF, {
  SelectedTool,
  OpenSourceAlternative,
  AlternativeTool,
} from "./CalculatorPDF";
import { ArrowDownToLine } from "lucide-react";

interface PDFDownloadButtonProps {
  teamSize: number;
  selectedTools: SelectedTool[];
  totalSavingsPerYear: number;
  openSourceAlternatives: AlternativeTool[];
  className?: string;
  iconSize?: string;
}

function useBase64Logo(logoUrl = "/logo.png") {
  const [base64, setBase64] = useState<string | null>(null);
  useEffect(() => {
    fetch(logoUrl)
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          setBase64(result.replace('data:image/png;base64,', ''));
        };
        reader.readAsDataURL(blob);
      });
  }, [logoUrl]);
  return base64;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  teamSize,
  selectedTools,
  totalSavingsPerYear,
  openSourceAlternatives,
  className,
  iconSize = "1.5em",
}) => {
  const logoBase64 = useBase64Logo();
  if (!logoBase64) return <div>Loading PDF...</div>;
  return (
    <PDFDownloadLink
      document={
        <CalculatorPDF
          teamSize={teamSize}
          selectedTools={selectedTools}
          totalSavingsPerYear={totalSavingsPerYear}
          openSourceAlternatives={openSourceAlternatives}
          logoBase64={logoBase64}
        />
      }
      fileName="open-source-savings-report.pdf"
      className={
        className +
        " btn btn-secondary btn-xs sm:btn-sm hover:shadow-md transition-transform hover:-translate-y-1"
      }
    >
      {({ loading }) => (
        <>
          <ArrowDownToLine
            style={{ width: iconSize, height: iconSize }}
            className="mr-2"
          />
          {loading ? "Preparing PDF..." : "Download Report PDF"}
        </>
      )}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;

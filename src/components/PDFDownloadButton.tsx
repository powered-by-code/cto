import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CalculatorPDF, { SelectedTool, OpenSourceAlternative, AlternativeTool } from './CalculatorPDF';
import { ArrowDownToLine } from 'lucide-react';

interface PDFDownloadButtonProps {
  teamSize: number;
  selectedTools: SelectedTool[];
  totalSavingsPerYear: number;
  openSourceAlternatives: AlternativeTool[];
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  teamSize,
  selectedTools,
  totalSavingsPerYear,
  openSourceAlternatives,
}) => {
  return (
    <PDFDownloadLink
      document={
        <CalculatorPDF
          teamSize={teamSize}
          selectedTools={selectedTools}
          totalSavingsPerYear={totalSavingsPerYear}
          openSourceAlternatives={openSourceAlternatives}
        />
      }
      fileName="open-source-savings-report.pdf"
      className="btn btn-secondary btn-xs sm:btn-sm hover:shadow-md transition-transform hover:-translate-y-1"
    >
      {({ loading }) => (
        <>
          <ArrowDownToLine className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          {loading ? 'Preparing PDF...' : 'Download Report PDF'}
        </>
      )}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton; 
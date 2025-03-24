import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

interface MeetingButtonProps {
  className?: string;
  text?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  showImage?: boolean;
  onClick?: () => void;
}

const MeetingButton: React.FC<MeetingButtonProps> = ({
  className = '',
  text = data.meetingLink.buttonText || 'Schedule a Call',
  variant = 'primary',
  showImage = true,
  onClick,
}) => {
  const meetingLink = data.meetingLink;
  
  // Determine button variant class
  const variantClass = variant === 'primary' 
    ? 'btn-primary' 
    : variant === 'outline' 
      ? 'btn-outline' 
      : 'btn-ghost';

  return (
    <Link 
      href={meetingLink.url} 
      className={`btn ${variantClass} flex items-center gap-2 ${className}`}
      target="_blank" 
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <span>{text}</span>
      {showImage && meetingLink.image && (
        <div className="avatar">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image 
              src={meetingLink.image} 
              alt={meetingLink.imageAlt || 'Profile picture'} 
              width={24} 
              height={24}
              className="object-cover"
            />
          </div>
        </div>
      )}
    </Link>
  );
};

export default MeetingButton; 
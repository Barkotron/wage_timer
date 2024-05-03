import { toTwoDecimals } from "../util/formatting";
export default function ProgressBar({percent, children}){
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${percent}%`,
      backgroundColor: "blue",
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${toTwoDecimals(percent)}%`}</span>
        </div>
      </div>
    );
  };
  
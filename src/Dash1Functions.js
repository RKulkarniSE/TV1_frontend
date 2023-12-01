
export function PlantDataStation(top, left, station_name, scada_values){
    return(
        <div style={{
            position: 'absolute',
            top: top,
            left: left,
            padding: '6px',
            borderRadius: '10px',
            background: Gradient(CountZeros(scada_values))
        }}>
            <span><b>{station_name}</b></span>
        </div>
    )
}

export function Gradient(count){
    switch(count){
        case 1: return 'red';
        case 0.75: return 'linear-gradient(to left, green 25%, red 75%)';
        case 0.5: return 'linear-gradient(to left, green 50%, red 50%)';
        case 0.25: return 'linear-gradient(to left, green 75%, red 25% )';
        default: return 'green';
    }
}

export function CountZeros(values){
    return (values.filter(value => value === 0).length/(values.length));
}
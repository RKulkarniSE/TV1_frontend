export const units = {
    CALLIDE_B1: 8,
    CALLIDE_B2: 9,
    STANWELL_1: 21,
    STANWELL_2: 22,
    STANWELL_3: 23,
    STANWELL_4: 24,
    TARONG_1: 26,
    TARONG_2: 27,
    TARONG_3: 28,
    TARONG_4: 29,
    KOGAN_CREEK_1: 10,
    HALLETT: 0,
    OSBORNE: 20,
    BARRON_GORGE_1: 1,
    BARRON_GORGE_2: 2,
    BRAEMAR: 3,
    OAKEY_1: 19,
    OAKEY_2: 18,
    BAYSWATER_1: 4,
    BAYSWATER_2: 5,
    BAYSWATER_3: 6,
    BAYSWATER_4: 7,
    VALES_POINT_1: 34,
    VALES_POINT_2: 35,
    MT_PIPER_1: 16,
    MT_PIPER_2: 17,
    TALLAWARRA: 25,
    URANQUINTY_1: 30,
    URANQUINTY_2: 31,
    URANQUINTY_3: 32,
    URANQUINTY_4: 33,
    LOY_YANG: 13,
    MORTLAKE_1: 14,
    MORTLAKE_2: 15,
    LAVERTON_NORTH_1: 11,
    LAVERTON_NORTH_2: 12
}

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

function Gradient(count){
    switch(count){
        case 1: return 'red';
        case 0.75: return 'linear-gradient(to left, green 25%, red 75%)';
        case 0.5: return 'linear-gradient(to left, green 50%, red 50%)';
        case 0.25: return 'linear-gradient(to left, green 75%, red 25% )';
        default: return 'green';
    }
}

function CountZeros(values){
    return (values.filter(value => value === 0).length/(values.length));
}
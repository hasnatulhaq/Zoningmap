import React, { useEffect, useState, useCallback } from 'react'
import { IonButton, IonFooter, IonButtons, IonFab, IonCard, IonContent, IonHeader, IonIcon, IonLoading, IonSpinner, IonToolbar, useIonViewWillEnter, withIonLifeCycle, IonFabButton, IonCardContent, IonItem, IonLabel, IonList, IonNote, IonSegment, IonSegmentButton, IonSearchbar, IonCheckbox } from '@ionic/react';
import { close, layersOutline, informationCircleOutline, add, remove, informationCircle, funnelOutline, search, funnel } from 'ionicons/icons';
import './ExploreContainer.css';

import ReactMapboxGl, { Layer, Feature, GeoJSONLayer,Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
(mapboxgl as any).workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;



var colors = [
  "#3a006b",
  "#9bf39d",
  "#d37cff",
  "#007c00",
  "#ff79ee",
  "#006200",
  "#005cc6",
  "#f79a05",
  "#004f97",
  "#ff4f00",
  "#00ffff",
  "#bf2000",
  "#00deb9",
  "#c3002d",
  "#00c0ca",
  "#bb0021",
  "#009b64",
  "#9f0044",
  "#7dc877",
  "#2d003c",
  "#ff7731",
  "#00a5b3",
  "#6f0000",
  "#82e1ff",
  "#5f0000",
  "#97d0f7",
  "#906e00",
  "#003a61",
  "#e57949",
  "#002541",
  "#8a6000",
  "#eaa3e0",
  "#005e00",
  "#ffa0c5",
  "#002d00",
  "#ebe3ff",
  "#1a2800",
  "#a6c9eb",
  "#466700",
  "#481741",
  "#49491e",
  "#718fbd",
  "#161918",
  "#927465"
]
var zonesdesc = ['Beverly Blvd Special Plan', 'Center for Early Education Specific Plan', 'Commercial, Arterial', 'Commercial, Community 1', 'Commercial, Community 2', 'Commercial, Neighborhood 1', 'Commercial, Neighborhood 2', 'Commercial, Regional Center', 'Movietown Specific Plan', 'Pacific Design Center Specific Plan', 'Public Facilities', 'Residential, Low Density', 'Residential, Multi-Family High-Density', 'Residential, Multi-Family Medium-Density', 'Residential, Single-Family or Two-Unit Low Density', 'Robertson Lane Specific Plan', 'Sunset Specific Plan']
var zonetype = ['COMMERCIAL', 'RESIDENTIAL', 'SPECIAL PLAN']

var zoningcolors = [
  'case'
] as any

var l = zonetype.length - 1
var counter = 0
for (var each in zonetype) {

  zoningcolors.push(['==', ['get', 'ZONE_TYPE'], zonetype[each]])
  zoningcolors.push(colors[each])
  if (counter == l) {
    zoningcolors.push('dimgrey')
  }
  counter = counter + 1
}

var zoningoverlaydesc = ['AB', 'CO', 'DA', 'GMU', 'NTO', 'WHWNOD']
var zoningoverlaycolors = [
  'case'
] as any
var lz = zoningoverlaydesc.length - 1
var counterz = 0
for (var each in zoningoverlaydesc) {

  zoningoverlaycolors.push(['==', ['get', 'ZONE_TYPE'], zonetype[each]])
  zoningoverlaycolors.push(colors[each])
  if (counterz == lz) {
    zoningoverlaycolors.push('dimgrey')
  }
  counterz = counterz + 1
}

var parcelcolors = ['case'] as any
var parceluse = ['Commercial', 'Government', 'Industrial', 'Institutional', 'Miscellaneous', 'Recreational', 'Residential']
var lp = parceluse.length - 1
var countery = 0

for (var each in parceluse) {
  parcelcolors.push(['==', ['get', "PARCEL_USE"], parceluse[each]])
  parcelcolors.push(colors[each])
  if (countery == lp) {
    console.log('exe')
    parcelcolors.push('dimgrey')
  }
  countery = countery + 1
}
var filterarr = [] as any

interface ContainerProps { }




const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmFyaGFuMzIiLCJhIjoiY2tzejAxbnA0Mm91ZTJ5bjEzaTU2cGswYiJ9.6uR1oXCY089BjFo38KCY7g'
});
const ExploreContainer: React.FC<ContainerProps> = () => {

  const[boundary,setboundary] =useState({})
  const[buildings,setbuildings]= useState({})
  const[parcels,setparcels]= useState({})
  const[sidedark,setsidedark]= useState({})
  const[zoning,setzoning]= useState({})
  const[zoningoverlay,setzoningoverlay]= useState({})
useEffect(() => {
  
  fetch('./data/boundary.json').then((res) => res.json())
  .then((data) => {setboundary(data)})

  fetch('./data/buildings.json').then((res) => res.json())
  .then((data) => {setbuildings(data)})

  fetch('./data/parcels.json').then((res) => res.json())
  .then((data) => {setparcels(data)})

  fetch('./data/sidedarks.json').then((res) => res.json())
  .then((data) => {setsidedark(data)})

  fetch('./data/zoning.json').then((res) => res.json())
  .then((data) => {setzoning(data)})

  fetch('./data/zoningoverlay.json').then((res) => res.json())
  .then((data) => {setzoningoverlay(data)})

}, [])

  const [mapb, setmapb] = useState(ReactMapboxGl.prototype)
  const [pitch, setpitch] = useState(0)
  const [mapzoom,setmapzoom] = useState(14)
  const [maplng,setmaplng] = useState(-118.37852055293303)
  const [maplat,setmaplat] = useState(34.08150350937754)
 
  const [pageloaded, setpageloaded] = useState(false)
  const [sidebar, setsidebar] = useState(false)
  const [sidebarsegment, setsidebarsegment] = useState('info')
  const [popupcoords, setpopupcoords] = useState([73, 33])
  const [popupcontent, setpopupcontent] = useState('')

  const [sidebarstate, setsidebarstate] = useState('info')
  const [selectedparcel,setselectedparcel] = useState(null) as any
  const [zonestoggle, setzonestoggle] = useState(false)
  const [zonesoverlaytoggle, setzonesoverlaytoggle] = useState(false)
  const [parcelstoggle, setparceltoggle] = useState(true)
  const [buildingstoggle, setbuildingstoggle] = useState(false)
  const [boundarytoggle, setboundarytoggle] = useState(true)
  const [sidedarktoggle, setsidedarktoggle] = useState(true)

  const layercontrol = [
    {

    }
  ]
const [filter,setFilter] = useState([])
const [layeroption,setlayeroption] = useState({
  filter:['!=','PARCEL_USE','']
})
  const [data, setData] = useState({
    ain: null,
    apn:null,
    address: '',
    use: '',
    use1: '',
    ass: '',
    subty: '',
    zone: '',
    loc: '',
    area: 0,
    depth:0,
    type: '',
    parking: '',
    lotwidth:0,
    floors:'',
    ahdensbo:'',
    ahdens1:'',
    openspace:'',
    zonedesc:'',
    minsetbac:'',
    minsetb1:'',
    minsetb2:'',
    minsetb3:'',
    minsetb4:'',
    minsetb5:'',
    minsetb6:'',
    maxsetbac:'',
    maxsetb6:'',
    maxdwelli:'',
    heightmax:'',
    farmax:'',
    numfloors:'',
    overalyty:'',
    overlaysu:'',
    overlayma:'',
    overlay1:'',
    overlayde:'',
    publicy:'',
    bonusmisc:'',
    overlay2:'',
    overlayop:'',
    heightinc:'',
    height_i1:'',
    farincent:'',
    farince:'',
    farmaxal:'',
    floorarea:'',
    floorar1:'',
    ssptarget:'',
    devrestri:'',
    maxbldfo:0,
    maxblden:0,
    maxbld1:0,
    openspa:'',
    dumaxall:'',
    scratch:'',

  })

const filterparcel = async(x:string) =>{
  
if(filterarr.includes(x)){
  filterarr = filterarr.filter(function(item:any) {
    return item !== x
  })
}else{
  filterarr.push(x)
}

  var filtertemp = ["all"] as any
  
  if(filterarr.length>0){
    for(var each in filterarr){
      filtertemp.push(['!=', 'PARCEL_USE', filterarr[each]]) 
    }
  }else{
    filtertemp.push(['!=', 'PARCEL_USE', '']) 
  }
 
setTimeout(()=>{setlayeroption({
  filter:filtertemp
})},500)


console.log(layeroption)
}

  useIonViewWillEnter(() => {
    setpageloaded(true)
  })

  const handleStyleLoad = (map: any) => {
    map.resize()

    map.setCenter([maplng,maplat])
    map.setZoom([mapzoom])

    setmapb(map)
    
    //     map.addSource('parcels',{
    //       type:'geojson',
    //       data:parcels
    //   })
    //   map.addSource('boundary',{
    //       type:'geojson',
    //       data:boundary
    //   })
    //   map.addSource('sidedark',{
    //       type:'geojson',
    //       data:sidedark
    //   })
    //   map.addSource('buildings',{
    //       type:'geojson',
    //       data:buildings
    //   })
    //   map.addSource('zoning',{
    //       type:'geojson',
    //       data:zoning
    //   })
    //   map.addSource('zoningoverlay',{
    //       type:'geojson',
    //       data:zoningoverlay
    //   })





    //     map.addLayer({
    //       'id':'parcellayer',
    //       'type':'fill',
    //       'source':'parcels',
    //       layout:{
    //          // 'visibility':'none'
    //       },
    //       'paint':{
    //        'fill-color': 'red',
    //        'fill-opacity' : 0.5,
    //       }
    //   })



    //   map.on('click','pacellayer',(e:any)=>{
    // console.log('exe')
    //     setpopupcoords([e.lngLat.lng,e.lngLat.lat])
    //     setpopupcontent(JSON.stringify(e.features[0].properties))
    // //    popup.setHTML(JSON.stringify(e.features[0].properties)).setLngLat([e.lnglng.lng,e.lnglat.lat])

    //   })


  }


  return (
    <>
      {
        pageloaded ? (
          <IonContent fullscreen>
            {
              sidebar ?
                <IonCard className='sidebar'>
                  <IonHeader>
                    <IonToolbar color='primary'>
                      <IonLabel className="ion-margin ion-padding" slot='start'>{data.address}</IonLabel>
                      <IonButtons slot='end'>

                        <IonButton shape='round' onClick={() => {
                          setsidebar(false)
                        }}><IonIcon icon={close} /></IonButton>

                      </IonButtons>

                    </IonToolbar>
                  </IonHeader>
                  <IonSegment onIonChange={(e: any) => { setsidebarsegment(e.detail.value) }} value={sidebarsegment}>
                    <IonSegmentButton value='info'>
                      <IonIcon icon={informationCircle} /> Info
                    </IonSegmentButton>
                    <IonSegmentButton value='layers'>
                      <IonIcon icon={layersOutline} />Layers
                    </IonSegmentButton>
                    <IonSegmentButton value='filter'>
                      <IonIcon icon={funnelOutline} /> Filter
                    </IonSegmentButton>
                  </IonSegment>
                        
                  <IonCardContent>
                  <IonContent fullscreen>
                    {
                      sidebarsegment == 'info' ?
                        <>

                          {
                            data.ain ?
                              <IonList >
                                <IonItem>
                                 <IonLabel  color='danger' ><b> Parcel ID</b></IonLabel><IonLabel color='danger' className="ion-float-end" ><b>{data.ain}</b></IonLabel> 
                                </IonItem>
                                <IonItem>
                                  <IonLabel >APN</IonLabel><IonLabel className="ion-float-end" >{data.apn}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel slot='start'>Address</IonLabel><IonNote style={{fontSize:'14px'}} slot="end" >{data.address}</IonNote>
                                </IonItem>
                                {/* <IonItem>
                                  <IonLabel >Use</IonLabel><IonLabel className="ion-float-end" >{data.use!='null'?data.use:'N/A'}</IonLabel>
                                </IonItem> */}
                                {/* <IonItem>
                                  <IonLabel >Number</IonLabel><IonLabel className="ion-float-end" >{data.ass}</IonLabel>
                                </IonItem> */}
                                {/* <IonItem>
                                  <IonLabel >Type</IonLabel><IonLabel className="ion-float-end" >{data.type}</IonLabel>
                                </IonItem> */}
                                <IonItem>
                                  <IonLabel >Zone</IonLabel><IonLabel className="ion-float-end" >{data.zone}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Zone Type</IonLabel><IonLabel className="ion-float-end" >{data.type}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Lot Width</IonLabel><IonLabel className="ion-float-end" >{data.lotwidth}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Area</IonLabel><IonLabel className="ion-float-end" >{data.area!=null?data.area.toFixed(2):'N/A'}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Lot Depth</IonLabel><IonLabel className="ion-float-end" >{data.depth}</IonLabel>
                                </IonItem>
                                 <IonItem>
                                  <IonLabel >Lot Width</IonLabel><IonLabel className="ion-float-end" >{data.lotwidth!=null?data.lotwidth.toFixed(2):"N/A"}</IonLabel>
                                </IonItem>
                                {/* <IonItem>
                                  <IonLabel >Floors</IonLabel><IonLabel className="ion-float-end" >{data.floors}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >AH_DENS_BONUS WEHO</IonLabel><IonLabel className="ion-float-end" >{data.ahdensbo}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >AH DENS BONUS CA</IonLabel><IonLabel className="ion-float-end" >{data.ahdens1}</IonLabel>
                                </IonItem>
                                
                               
                        */}
                                <IonItem>
                                  <IonLabel >Front Setback</IonLabel><IonLabel className="ion-float-end" >{data.minsetbac}</IonLabel>
                                </IonItem>

                               
                                {/* <IonItem>
                                  <IonLabel >MIN Setback Front Story 2</IonLabel><IonLabel className="ion-float-end" >{data.minsetb1}</IonLabel>
                                </IonItem> */}
                                  <IonItem>
                                  <IonLabel >Side setback</IonLabel><IonLabel className="ion-float-end" >{data.minsetb2}</IonLabel>
                                </IonItem>
                                 {/* <IonItem>
                                   <IonLabel >MIN Setback Side Story 2</IonLabel><IonLabel className="ion-float-end" >{data.minsetb3}</IonLabel>
                                </IonItem>
                                  <IonItem>
                                  <IonLabel >MIN Setback Side Story 3</IonLabel><IonLabel className="ion-float-end" >{data.minsetb4}</IonLabel>
                                </IonItem>
                                  <IonItem>
                                  <IonLabel >MIN Setback Side Story 4</IonLabel><IonLabel className="ion-float-end" >{data.minsetb5}</IonLabel>
                                </IonItem> */}
                                  <IonItem>
                                  <IonLabel >Rear Setback</IonLabel><IonLabel className="ion-float-end" >{data.minsetb6}</IonLabel>
                                </IonItem>
                                  {/* <IonItem>
                                  <IonLabel >MAX Setback Front</IonLabel><IonLabel className="ion-float-end" >{data.maxsetbac}</IonLabel>
                                </IonItem> */}
                                  {/* <IonItem>
                                  <IonLabel >MAX Setback Side</IonLabel><IonLabel className="ion-float-end" >{data.maxsetb6}</IonLabel>
                                </IonItem> */}
                                  <IonItem>
                                  <IonLabel color='danger' >MAX Dwelling Units</IonLabel><IonLabel className="ion-float-end" color='danger' >{data.maxdwelli}</IonLabel>
                                </IonItem>

                                  
                                  <IonItem>
                                  <IonLabel >Max Far</IonLabel><IonLabel className="ion-float-end" >{data.farmax}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Max Height</IonLabel><IonLabel className="ion-float-end" >{data.heightmax}</IonLabel>
                                </IonItem>

                                  <IonItem>
                                  <IonLabel >Max Stories</IonLabel><IonLabel className="ion-float-end" >{data.numfloors}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Open Space Required</IonLabel><IonNote style={{fontSize:'14px'}} slot='end'>{data.openspace}</IonNote>
                                </IonItem>
                                <IonItem>
                                  <IonLabel slot='start'>Land Use</IonLabel><IonNote style={{fontSize:'14px'}} slot='end' >{data.zonedesc}</IonNote>
                                </IonItem>
                                  <IonItem>
                                  <IonLabel >OVERLAY TYPE</IonLabel><IonLabel className="ion-float-end" >{data.overalyty!='null'?data.overalyty:'N/A'}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >OVERLAY FAR BONUS</IonLabel><IonLabel className="ion-float-end" >{data.overlay1}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >OVERLAY HEIGHT BONUS</IonLabel><IonLabel className="ion-float-end" >{data.overlayma}</IonLabel>
                                </IonItem>

                                  {/* <IonItem>
                                  <IonLabel >OVERLAY_SUBTYPE</IonLabel><IonLabel className="ion-float-end" >{data.overlaysu!='null'?data.overlaysu:'N/A'}</IonLabel>
                                </IonItem>
                                   */}
                                  
                                  <IonItem>
                                  <IonLabel slot='start'>OVERLAY Description</IonLabel><IonNote slot='end' >{data.overlayde!='null'?data.overlayde:'N/A'}</IonNote>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Density Bonus Height</IonLabel><IonLabel className="ion-float-end" >{data.heightinc}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Density Bonus FAR</IonLabel><IonLabel className="ion-float-end" >{data.farincent!='null'?data.farincent:'N/A'}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Buildable Footprint</IonLabel><IonLabel className="ion-float-end" >{data.maxbldfo?data.maxbldfo.toFixed(2):'N/A'}</IonLabel>
                                </IonItem>
                                  <IonItem>
                                  <IonLabel >Buildable Envelope</IonLabel><IonLabel className="ion-float-end" >{data.maxblden?data.maxblden.toFixed(2):'N/A'}</IonLabel>
                                </IonItem>
                                <IonItem>
                                  <IonNote style={{fontSize:'14px'}}><b>Parking Required : </b>{data.parking}</IonNote>
                                </IonItem>
                                <IonItem>
                                  <IonLabel >Open Space Required</IonLabel><IonLabel className="ion-float-end" >{data.openspa!='null'?data.openspa:'N/A'}</IonLabel>
                                </IonItem>
                                  {/* <IonItem>
                                  <IonLabel >PUBLICLY_DEV</IonLabel><IonLabel className="ion-float-end" >{data.publicy!='null'?data.publicy:'N/A'}</IonLabel>
                                </IonItem>
                                  <IonItem>
                                  <IonLabel >BONUS_MISC</IonLabel><IonLabel className="ion-float-end" >{data.bonusmisc!='null'?data.bonusmisc:'N/A'}</IonLabel>
                                </IonItem>
                                  <IonItem>
                                  <IonLabel >OVERLAY_2</IonLabel><IonLabel className="ion-float-end" >{data.overlay2}</IonLabel>
                                </IonItem>
                                  <IonItem>
                                  <IonNote >OVERLAY_OPEN SPACE REQ</IonNote><IonNote className="ion-float-end" >{data.overlayop}</IonNote>
                                </IonItem> */}
                                  
                                  {/* <IonItem>
                                  <IonNote >HEIGHT MAX ALLOWED</IonNote><IonNote className="ion-float-end" >{data.height_i1!='null'?data.height_i1:'N/A'}</IonNote>
                                </IonItem>
                                  
                                  <IonItem>
                                  <IonNote >FAR_BONUS INCENTIVE</IonNote><IonNote className="ion-float-end" >{data.farince!='null'?data.farince:'N/A'}</IonNote>
                                </IonItem>
                                  <IonItem>
                                  <IonNote >FAR_MAX_ALLOWED</IonNote><IonNote className="ion-float-end" >{data.farmaxal}</IonNote>
                                </IonItem>
                                  <IonItem>
                                  <IonNote >FLOOR AREA BONUS_SF</IonNote><IonNote className="ion-float-end" >{data.floorarea!='null'?data.floorarea:'N/A'}</IonNote>
                                </IonItem>
                                  <IonItem>
                                  <IonNote >FLOOR AREA BONUS_REQ</IonNote><IonNote className="ion-float-end" >{data.floorar1!='null'?data.floorar1:'N/A'}</IonNote>
                                </IonItem>
                                  <IonItem>
                                  <IonNote >SSP_TARGET</IonNote><IonNote className="ion-float-end" >{data.ssptarget!='null'?data.ssptarget:'N/A'}</IonNote>
                                </IonItem>
                                  <IonItem>
                                  <IonNote >DEV_RESTRICTION</IonNote><IonNote className="ion-float-end" >{data.devrestri!='null'?data.devrestri:'N/A'}</IonNote>
                                </IonItem>
                                  
                                  <IonItem>
                                  <IonNote >MAX_BLD_ENVELOPE POSSIBLE</IonNote><IonNote className="ion-float-end" >{data.maxbld1?data.maxbld1.toFixed(2):'N/A'}</IonNote>
                                </IonItem>
                                  
                                  <IonItem>
                                  <IonNote >DU_MAX_ALLOWED</IonNote><IonNote className="ion-float-end" >{data.dumaxall}</IonNote>
                                </IonItem>
                                  <IonItem>
                                  <IonNote slot='start'>scratch</IonNote><IonNote className="ion-float-end" >{data.scratch!='null'?data.scratch:'N/A'}</IonNote>
                                </IonItem> */}

                                
                                
                              </IonList>
                              :
                              <IonItem color='warning'>
                                <IonLabel>Click on the Map to Preview Details</IonLabel>
                              </IonItem>
                          }

                        </>
                        : sidebarsegment == 'layers' ?

                          <>
                            <IonList>

                              <IonItem lines='full'>
                                <IonCheckbox checked={zonestoggle} slot='end' onIonChange={() => { setzonestoggle(!zonestoggle) }} /><IonLabel>Zones</IonLabel>
                              </IonItem>

                              <IonItem lines='full'>
                                <IonCheckbox checked={zonesoverlaytoggle} slot='end' onIonChange={() => { setzonesoverlaytoggle(!zonesoverlaytoggle) }} /><IonLabel>Zones Overlay</IonLabel>
                              </IonItem>

                              <IonItem lines='full'>
                                <IonCheckbox checked={boundarytoggle} slot='end' onIonChange={() => { setboundarytoggle(!boundarytoggle) }} /><IonLabel>Boundary</IonLabel>
                              </IonItem>

                              <IonItem lines='full'>
                                <IonCheckbox checked={sidedarktoggle} slot='end' onIonChange={() => { setsidedarktoggle(!sidedarktoggle) }} /><IonLabel>Focus Shadow</IonLabel>
                              </IonItem>

                              <IonItem lines='full'>
                                <IonCheckbox checked={parcelstoggle} slot='end' onIonChange={() => { setparceltoggle(!parcelstoggle) }} /><IonLabel>Parcels</IonLabel>
                              </IonItem>

                              <IonItem lines='full'>
                                <IonCheckbox checked={buildingstoggle} slot='end' onIonChange={() => { setbuildingstoggle(!buildingstoggle) }} /><IonLabel>Buildings</IonLabel>
                              </IonItem>

                            </IonList>

                          </>

                          :
                          <>
                            
                              {parceluse.map((obj: string, i: number) => 
                               <FilterCheck obj={obj} handler={filterparcel}/>
                                )}
                           
                          </>
                    }
</IonContent>
                  </IonCardContent>
                  
                </IonCard>
                :
                <IonFab style={{ marginTop: '60px' }} vertical="top" horizontal="start">
                  <IonFabButton style={{ marginBottom: '3px' }} onClick={() => { setsidebar(true); setsidebarsegment('info') }}>
                    <IonIcon icon={informationCircle} />
                  </IonFabButton>
                  <IonFabButton style={{ marginBottom: '3px' }} onClick={() => { setsidebar(true); setsidebarsegment('filter') }}>
                    <IonIcon icon={funnel} />
                  </IonFabButton>
                  <IonFabButton style={{ marginBottom: '3px' }} onClick={() => { setsidebar(true); setsidebarsegment('layers') }}>
                    <IonIcon icon={layersOutline} />
                  </IonFabButton>
                </IonFab>
            }

            <div className='searchbar'>
              <IonSearchbar placeholder={"Search By Name"} /><IonButton className="searchbtn"><IonIcon icon={search} /></IonButton>
            </div>
            <div className='zoomcontrols'>

              <IonCard style={{ marginBottom: '-13px' }}>
                <IonItem lines='none' onClick={() => { mapb.zoomIn({ duration: 500 }) }} button><IonIcon icon={add} /></IonItem>
                <IonItem lines='none' button onClick={() => { mapb.zoomOut({ duration: 500 }) }}><IonIcon icon={remove} /></IonItem>

                <IonItem lines='none' color={pitch == 0 ? '' : 'primary'} button onClick={() => { setpitch(pitch == 0 ? 60 : 0); setbuildingstoggle(!buildingstoggle) }}>3D</IonItem>

              </IonCard>

            </div>
            <Map
               
              pitch={[pitch]}
              onStyleLoad={handleStyleLoad}
                

              onDragEnd={map=>{
                var cent = map.getCenter() as any
                setmaplng(cent.lng)
                setmaplat(cent.lat)
                
              }}

              onZoomEnd={map=>{
                setmapzoom(map.getZoom())
              }}

              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '100%',
                width: '100vw'
              }}
            >
              {
                parcelstoggle ?
                  <>
                    <GeoJSONLayer
                      data={parcels}
                     
                      layerOptions={layeroption}
                      fillPaint={{
                        'fill-color': 'aqua',
                        'fill-opacity': 0,
                      }}
                      fillOnClick={(e: any) => {
                        
                        setsidebar(true)
                        setsidebarsegment('info')
                        var ll = e.features[0].properties as any
                        setselectedparcel(e.features[0])
                        var jj = {
                          ain: ll.PARCEL_AIN,
                          apn: ll.PARCEL_APN,
                          address: ll.PARCEL_ADD,
                          use: ll.PARCEL_USE,
                          use1: ll.PARCEL_U_1,
                          ass: ll.PARCEL_ASS,
                          subty: ll.ZONE_SUBTY,
                          zone: ll.ZONE,
                          loc: ll.PARCEL_TYP,
                          area: ll.LOT_AREA,
                          depth: ll.LOT_DEPTH,
                          type: ll.ZONE_TYPE,
                          parking: ll.PARKING_RE,
                          lotwidth:ll.LOT_WIDTH,
                          floors:ll.NUM_FLOORS,
                          ahdensbo:ll.AH_DENS_BO,
                          ahdens1:ll.AH_DENS_1,
                          openspace:ll.OPEN_SPACE,
                          zonedesc:ll.ZONE_DESCR,
                          minsetbac:ll.MIN_SETBAC,
                          minsetb1:ll.MIN_SETB_1,
                          minsetb2:ll.MIN_SETB_2,
                          minsetb3:ll.MIN_SETB_3,
                          minsetb4:ll.MIN_SETB_4,
                          minsetb5:ll.MIN_SETB_5,
                          minsetb6:ll.MIN_SETB_6,
                          maxsetbac:ll.MAX_SETBAC,
                          maxsetb6:ll.MAX_SETB_1,
                          maxdwelli:ll.MAX_DWELLI,
                          heightmax:ll.HEIGHT_MAX,
                          farmax:ll.FAR_MAX_BA,
                          numfloors:ll.NUM_FLOORS,
                          overalyty:ll.OVERLAY_TY,
                          overlaysu:ll.OVERLAY_SU,
                          overlayma:ll.OVERLAY_MA,
                          overlay1:ll.OVERLAY_1,
                          overlayde:ll.OVERLAY_DE,
                          publicy:ll.PUBLICLY_D,
                          bonusmisc:ll.BONUS_MISC,
                          overlay2:ll.OVERLAY_2,
                          overlayop:ll.OVERLAY_OP,
                          heightinc:ll.HEIGHT_INC,
                          height_i1:ll.HEIGHT_I_1,
                          farincent:ll.FAR_INCENT,
                          farince:ll.FAR_INCE_1,
                          farmaxal:ll.FAR_MAX_AL,
                          floorarea:ll.FLOOR_AREA,
                          floorar1:ll.FLOOR_AR_1,
                          ssptarget:ll.SSP_TARGET,
                          devrestri:ll.DEV_RESTRI,
                          maxbldfo:ll.MAX_BLD_FO,
                          maxblden:ll.MAX_BLD_EN,
                          maxbld1:ll.MAX_BLD__1,
                          openspa:ll.OPEN_SPA_1,
                          dumaxall:ll.DU_MAX_ALL,
                          scratch:ll.scratch,




                        }
                        setData(jj)
                      }}
                      // fillOnMouseMove={(e: any) => {
                      //   setpopupcoords([e.lngLat.lng, e.lngLat.lat])
                      //   setpopupcontent(e.features[0].properties.PARCEL_AIN)
                      // }}

                      linePaint = {{
                        'line-color':'aqua',
                        'line-width':1
                      }}

                      fillOnMouseEnter={() => { mapb.getCanvas().style.cursor = 'pointer'; }}
                      fillOnMouseLeave={() => { setpopupcoords([0, 0]); mapb.getCanvas().style.cursor = '' }}
                    />
                    <GeoJSONLayer
                      data={selectedparcel}
                      // layerOptions={{filter:['==','PARCEL_AIN',selectedparcel]}}
                      
                      linePaint = {{
                        'line-color':'red',
                        'line-width':3
                      }}

                    />
                  </>
                  : <></>
              }
              {
                zonestoggle ?
                  <GeoJSONLayer
                    data={zoning}
                    fillPaint={{
                      'fill-color': zoningcolors,
                      'fill-opacity': 0.5,
                    }}
                    symbolLayout={{

                      "text-field": ['get', 'Label'],
                      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                      "text-offset": [0, 0.6],

                    }}
                  /> : <></>
              }
              {
                zonesoverlaytoggle ?
                  <GeoJSONLayer
                    data={zoningoverlay}
                    fillPaint={{
                      'fill-color': zoningoverlaycolors,
                      'fill-opacity': 0.5,
                    }}
                    linePaint={{
                      'line-color': 'red',
                      'line-width': 3
                    }}
                    symbolLayout={{

                      "text-field": ['get', 'OverlayTyp'],
                      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                      "text-offset": [0, 0.6],

                    }}
                  /> : <></>
              }
              {
                buildingstoggle ?
                  <GeoJSONLayer

                    fillExtrusionPaint={{
                      'fill-extrusion-color': 'grey',
                      'fill-extrusion-height': ['get', 'HEIGHT'],
                      'fill-extrusion-opacity': 1
                    }}
                    data={buildings}

                  /> : <></>
              }
              {
                sidedarktoggle ?
                  <GeoJSONLayer
                    data={sidedark}
                    fillPaint={{
                      'fill-color': 'dimgrey',
                      'fill-opacity': 0.9,
                    }}
                  /> : <></>
              }
              {
                boundarytoggle ?
                  <GeoJSONLayer
                    data={boundary}
                    linePaint={{
                      'line-color': 'red',
                      'line-width': 3
                    }}
                  /> : <></>
              }
              <Popup
                coordinates={popupcoords}
              >
                <IonItem lines='full'><IonLabel>{popupcontent}</IonLabel></IonItem>
              </Popup>
            </Map>
            <div className='footer'>
              <IonFooter><IonToolbar>
                <IonButtons slot='end'>
                  <IonButton>
                    Help us Improve
                  </IonButton>
                </IonButtons>
                Allrights Reserverd
              </IonToolbar></IonFooter>
            </div>
          </IonContent>
        ) : (<>
          <IonSpinner style={{ position: 'absolute', left: '50%', top: '50%' }} color='primary' />
        </>)

      }

    </>

  );
};

export default withIonLifeCycle(ExploreContainer);

interface xyz{
obj:any,
handler:any
}
const FilterCheck = (prop:xyz) =>{
const [check,setcheck] = useState(true)
  return(
    <>
      <IonItem onClick={(e) => {prop.handler(prop.obj)}} lines='full'>
        <IonCheckbox checked={check} slot='end' onIonChange={e=>{setcheck(!check)}}/><IonLabel>{prop.obj}</IonLabel>

      </IonItem>
    </>
  )
}

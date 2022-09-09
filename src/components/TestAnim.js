const TestAnim = () => {
    return (
       
        <div id="conteneur">
        <div id="contenu">
      
        <div id="auCentre">
        <div className="boite calque1" onmouseover="Animer()" ></div>
        <div className="boite calque2" onmouseover="Animer2()"></div>
        <div className="boite calque3" onmouseover="Animer3()"></div>
        <div className="boite calque4" onmouseover="Animer4()"></div>
        <div className="boite2" onmouseover="Animer5()" ><img  id="img"classeName="image" src="../Test/logo_kornac_blanc.png" alt="logo_Kornac" height="100"  style="display:none"/></div>
        </div>
        </div>
    </div>

        );
    };
        export default TestAnim;
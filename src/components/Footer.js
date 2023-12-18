export default function Footer() {
    return <>
        <div className="Footer">

            <div className="Stolbik" style={{ gap: '50px' }}>
                <div className="Text logo" style={{ lineHeight: '20px' }}>ИСиТ </div>
                <div style={{ gap: '15px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                    <div className="Text" style={{ fontSize: '25px' }}>Контакты</div>
                    <div className="Text" style={{ fontSize: '20px', paddingLeft: '20px' }}>+7-908-033-33-33</div>
                </div>
            </div>

            <div className="Stolbik">
                <div style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
                    <div className="Text" style={{ fontSize: '25px' }}>Юридическй адрес</div>
                    <div className="Text" style={{ fontSize: '20px', lineHeight: '30px', paddingLeft: '20px' }}>г. Норильск, ул. 50 лет Октября, д. 7</div>
                </div>
                <div style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
                    <div className="Text" style={{ fontSize: '25px' }}>Фактический адрес</div>
                    <div className="Text" style={{ fontSize: '20px', lineHeight: '30px', paddingLeft: '20px' }}>г. Норильск, ул. Пушкина, д. 6А</div>
                </div>
            </div>

            <div className="Stolbik">
                <div className="Text" style={{ fontSize: '25px' }}>Supported by</div>
                <div style={{ gap: '10px', display: 'flex', flexDirection: 'column', lineHeight: '30px', paddingLeft: '20px' }}>
                    <div className="Text" style={{ fontSize: '20px' }}>ЗФ ПАО ГМК “Норильский никель”</div>
                    <div className="Text" style={{ fontSize: '20px' }}>Администрация города Норильска</div>
                    <div className="Text" style={{ fontSize: '20px' }}>АНО “Агенство развития Норильска”</div>
                    <div className="Text" style={{ fontSize: '20px' }}>IT-Cube Норильск</div>

                </div>
            </div>

            <div className="Stolbik">
                <div className="Text" style={{ fontSize: '25px' }}>Designed and developed by</div>
                <div style={{ gap: '10px', display: 'flex', flexDirection: 'column', lineHeight: '30px', paddingLeft: '20px'  }}>
                    <div className="Text" style={{ fontSize: '20px' }}>Старостин Глеб</div>
                    <div className="Text" style={{ fontSize: '20px' }}>Маркевич Александр</div>
                    <div className="Text" style={{ fontSize: '20px' }}>Зюкин Сергей</div>
                </div>
            </div>
        </div>
    </>
}
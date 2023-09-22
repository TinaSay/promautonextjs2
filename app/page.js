import Image from 'next/image'
import {faThumbsUp,faWallet,faCheck,faCalendar,faGears} from '@fortawesome/free-solid-svg-icons'
import Nav from "./components/nav";
import Features from "./components/features";

export default function Home() {
  return (
      <>
          <div className="hero">
              <div className="slide">
                  <div style={{backgroundImage:`url("/images/banner0.png")`}}></div>
                  <div style={{backgroundImage:`url("/images/banner1.png")`}}></div>
                  <div style={{backgroundImage:`url("/images/banner2.png")`}}></div>
                  <div style={{backgroundImage:`url("/images/banner0.png")`}}></div>
                  <div style={{backgroundImage:`url("/images/banner1.png")`}}></div>

              </div>

              <div className="caption">
                  <h2>ШКАФЫ УПРАВЛЕНИЯ НАСОСАМИ</h2>
                  <ul>
                      <li>Разработка, производство шкафов управления для насосов</li>
                      <li>Автоматизация систем управления</li>
                      <li>SKADA системы для мониторинга оборудования</li>
                      <li>Шкафы автоматики с локальным ПЛК</li>
                      <li>Подбор и установка оборудования KSB и Unitronics</li>
                  </ul>
              </div>
          </div>
      <Nav />
          <div className="spacer" />
          <div className="section-title">
              <h3>Почему выбирают нас</h3>
          </div>
          <div className="features">

              <Features icon="icon1"
                    title="Качество"
                    desc="Качественная сборка щитов по последним технологиям" />
              <Features icon="icon2"
                        title="Оптимальные цены"
                        desc="Оптимальное соотношение цены и качества" />
              <Features icon="icon3"
                        title="ГАРАНТИЯ"
                        desc="Гарантия на продукцию 2 года с техобслуживанием" />
              <Features icon="icon4"
                        title="СРОКИ"
                        desc="Оперативные сроки выполнения, за счет ответственного подхода к делу" />
              <Features icon="icon5"
                        title="ТЕХПОДДЕРЖКА"
                        desc="Круглосуточная техническая поддержка" />

          </div>
          <div className="spacer" />
          <section className="section1 inner-padding">
              <div className="wrapper bgcontent">
                  <div className="wrapper-small">
                      <div className="columns inner-padding">
                          <div className="left">
                              <h3>НАЗНАЧЕНИЕ И ОСНАСТКА ШКАФА УПРАВЛЕНИЯ НАСОСАМИ ШУН
                              </h3>
                              <p>У разных моделей шкафов автоматики начинка будет отличаться. У каждого пункта контроля
                                  имеется
                                  своя
                                  индивидуальная функциональная направленность.</p>
                              <p>«Promautomatika» изготавливает ШУН только под заказ, чтобы оборудование соответствовало
                                  конкретным
                                  требованиям, и работа с ним была максимально удобной.</p>
                              <p>Любой шкаф обязан выполнять организацию работы оборудования подключенного к нему. В
                                  данном
                                  случае
                                  это
                                  насосная система. С помощью одного пульта управления можно с легкостью контролировать
                                  дренажные
                                  двигатели, поверхностные и скважинные насосы.</p>
                              <p>Автоматическое управление насосами очень удобно ведь за ним нет необходимости следить.
                                  В
                                  случае
                                  же
                                  ручного управления придется постоянно переключать тумблера, для чего потребуется много
                                  времени.</p>
                          </div>
                          <div className="right">
                              <h3>Чем удобна автоматика:
                              </h3>
                              <ul>
                                  <li>Контролируется сетевое напряжение, которое необходимо для обеспечения
                                      бесперебойного
                                      функционала
                                      оборудования;
                                  </li>
                                  <li>Предохранение механических элементов и систем от перебоев электрического питания и
                                      короткого
                                      замыкания;
                                  </li>
                                  <li>Контролируется уровень воды в резервуаре или скважине с быстрым реагированием на
                                      ее
                                      недостаток;
                                  </li>
                                  <li>Автоматически фиксируются скачки давления и регулируются оптимальные параметры;
                                  </li>
                                  <li>Управление скважинными насосами осуществляется дистанционно;
                                  </li>
                                  <li>Распределяется нагрузка между всеми агрегатами, а также осуществляется аварийное
                                      включение
                                      запасных вариантов.
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>

              </div>

          </section>

          <div className="section-title spacer">
              <h3>ШЕФ-МОНТАЖ И ПУСКО-НАЛАДКА</h3>
              <h4>Фотографии с места работы</h4>
          </div>
          <section className="section2">
              <div className="wrapper">
                  <div className="gallery">
                      <Image src="/images/works/works1.jpg" alt="Рабочий процесс, шеф-монтаж и пуско-наладка" width={300} height={200} />
                      <Image src="/images/works/works2.jpg" alt="Рабочий процесс, шеф-монтаж и пуско-наладка" width={300} height={200} />
                      <Image src="/images/works/works3.jpg" alt="Рабочий процесс, шеф-монтаж и пуско-наладка" width={300} height={200} />
                      <Image src="/images/works/works4.jpg" alt="Рабочий процесс, шеф-монтаж и пуско-наладка" width={300} height={200} />
                      <Image src="/images/works/works5.jpg" alt="Рабочий процесс, шеф-монтаж и пуско-наладка" width={300} height={200} />
                      <Image src="/images/works/works6.jpg" alt="Рабочий процесс, шеф-монтаж и пуско-наладка" width={300} height={200} />
                      <Image src="/images/works/works7.jpg" alt="Рабочий процесс, шеф-монтаж и пуско-наладка" width={300} height={200} />
                      <Image src="/images/works/works8.jpg" alt="Рабочий процесс, шеф-монтаж и пуско-наладка" width={300} height={200} />
                     </div>

              </div>

          </section>
          <div className="spacer"/>
          <section className="section3 inner-padding">
              <div className="wrapper">
                  <div className="bgcontent">
                      <div className="wrapper-small inner-padding">
                          <h3>О нас</h3>
                          <p>Компания ООО “Promautomatika” занимается производством и сборкой электрощитового
                              оборудования
                              любой
                              сложности.</p>

                          <p>У компании «Promautomatika» огромный производственный опыт, большой потенциал,
                              высокотехнологичное
                              оборудование, необходимые инструменты. Наша продукция соответствует всем современным
                              нормам и
                              стандартам, имеет полный пакет документов, что гарантирует надежную работу в течении всего
                              срока
                              службы.</p>

                          <p>За время работы мы собрали слаженный, опытный коллектив. Имеем надежных поставщиков и
                              партнеров.</p>

                          <p>Качество выпускаемой продукции обеспечивают опытные специалисты-сборщики, в компании
                              работают
                              профессиональные инженеры-разработчики.</p>

                          <p>На объект поставляется оборудование, готовое к монтажу и пусконаладке, обладающее
                              необходимыми
                              свойствами:</p>

                          <ul>
                              <li>высокой степенью защиты от пыли и влаги;</li>
                              <li>устойчивостью к износу, ударной нагрузке;</li>
                              <li>способной работать в сложных условиях;</li>
                          </ul>
                          <p>Гарантируем долгий срок службы своих изделий, минимальные затраты на этапе монтажных и
                              пусконаладочных работ.</p>
                      </div>
                  </div>
              </div>

          </section>

          <div className="spacer"/>
          <div className="section-title">
              <h3>КОМПЛЕКТУЮЩИЕ ОТ МИРОВЫХ ПРОИЗВОДИТЕЛЕЙ</h3>
          </div>
          <section className="inner-padding section4">
              <div className="wrapper-small">
                  <Image src="/images/devices.png" alt="Комплектующие от мировых производителей" height={137} width={866} className="img-responsive" />
              </div>
          </section>
          <div className="section-title">
              <h3>Процесс работы</h3>
          </div>
          <section className="wrapper inner-padding section5">
              <div className="work-process">
                  <div className="card">
                      <Image src="/images/process/proektirovshchik-eto.jpg" alt="Подробное изучение объекта автоматизации" width={300} height={200} />

                          <ul className="details">
                              <li>Подробное изучение объекта автоматизации по представленной техдокументации.</li>
                              <li>Проектирование оборудования с последующим согласованием с заказчиком.</li>
                              <li>Составление компетентного задания для сборочного участка.</li>
                          </ul>
                  </div>
                  <div className="card">
                      <Image src="/images/process/projecter.jpg" alt="Разработка системы SCADA" width={300} height={200} />
                          <ul className="details">
                              <li>Комплектация необходимой сопроводительной документации.</li>
                              <li>Программирование комплекса.</li>
                              <li>Разработка системы SCADA (программного пакета).</li>
                          </ul>
                  </div>
                  <div className="card">
                      <Image src="/images/process/podklyucheniye.jpg" alt="Подбор и сборка комплектующих в щитке или шкафу" width={300} height={200} />
                          <ul className="details">
                              <li>Подбор и сборка комплектующих в щитке или шкафу.</li>
                              <li>Проверка готового оборудования.</li>
                              <li>Поставка устройства на объект.</li>
                          </ul>
                  </div>
                  <div className="card">
                      <Image src="/images/process/ppuski.jpg" alt="Пусконаладочные работы комплексов автоматики" width={300} height={200} />
                          <ul className="details">
                              <li>Авторский надзор при монтажных работах, возможен шеф-монтаж.</li>
                              <li>Пусконаладочные работы комплексов автоматики.</li>
                              <li>Экспресс-обучение специалистов по эксплуатации электрощитового оборудования.</li>
                              <li>Гарантийное и послегарантийное обслуживание установленных устройств.</li>
                          </ul>
                  </div>
              </div>

          </section>

          <section className="inner-padding wrapper-small">
              <div className="section-title cta">
                  <h3>Позвоните сейчас</h3><br/>
                  <h3><a href="tel:998974415494">+99897 441-54-94</a></h3><br/>
                  <h3><a href="tel:998935433211">+99893 543-32-11</a></h3>
              </div>
          </section>

      </>
  )
}

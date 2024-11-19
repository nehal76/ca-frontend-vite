import './css/Center.css';
import UseScrollTop from '../CustomHook/UseScrollTop';

export default function Center() {
  UseScrollTop();
  return (
    <>
      <div className='container_1'>
        <div className='card_1'>
          <div className='cardTitle_1'>TDS Return Filing</div>
          <div className='cardContent_1'>
            TDS Return Filing involves submitting a quarterly statement to the
            Income Tax Department, detailing the tax deducted at source (TDS) on
            various payments made by the deductor. This ensures accurate tax
            collection and compliance with tax regulations.
          </div>
        </div>

        <div className='card_1'>
          <div className='cardTitle_1'>TAXATION & REGULATORY SERVICES</div>
          <div className='cardContent_1'>
            Strategic tax planning and compliance to minimize liabilities and
            ensure adherence to all regulatory requirements, safeguarding your
            financial integrity.
          </div>
        </div>

        <div className='card_1'>
          <div className='cardTitle_1'>NRI Income Tax Filing</div>
          <div className='cardContent_1'>
            NRI Income Tax Filing involves submitting tax returns for income
            earned in India by Non-Resident Indians, based on their residential
            status as per the Indian Income Tax Act, 1961.
          </div>
        </div>
      </div>

      <div className='container_1'>
        <div className='card_1'>
          <div className='cardTitle_1'>Investment & Financial Planning</div>
          <div className='cardContent_1'>
            Investment and financial planning involve setting financial goals
            and creating strategies to manage income, expenses, savings, and
            investments to achieve those goals.
          </div>
        </div>

        <div className='card_1'>
          <div className='cardIcon_1'>
            <span className='iconWrench_1' />
          </div>
          <div className='cardTitle_1'>CFO SERVICES</div>
          <div className='cardContent_1'>
            Providing expert financial leadership, including strategic planning,
            financial reporting, and risk management, to drive your business
            growth and ensure sound financial health.
          </div>
        </div>

        <div className='card_1'>
          <div className='cardIcon_1'>
            <span className='iconBriefcase_1' />
          </div>
          <div className='cardTitle_1'>
            GST Registration & GST Returns Filing
          </div>
          <div className='cardContent_1'>
            GST Registration involves obtaining a unique GSTIN for a business,
            while GST Returns Filing entails submitting periodic statements of
            sales, purchases, and tax paid to the GST portal.
          </div>
        </div>
      </div>
    </>
  );
}
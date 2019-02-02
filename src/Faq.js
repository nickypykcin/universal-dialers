import React, { Fragment } from 'react'
import { Icon } from 'semantic-ui-react'
import posed from 'react-pose'
import styled from 'styled-components'
import Questions from './Questions'
import Footer from './Footer'

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})

const Accordians = styled.div`
  padding: 0;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: linear-gradient(-180deg, #ffffff 0%, #f3f3f3 100%);
  padding-bottom: 40px;

  #root {
    display: flex;
    flex-direction: column;
    width: 400px;
    color: white;
    font-family: 'PT Sans', Helvetica, sans-serif;
  }

  h1 {
    margin-bottom: 0px;
    color: #252942;
    text-align: center;
  }
  h2 {
    margin: 0;
    width: 60%;
    min-width: 350px;
  }
  .title {
    cursor: pointer;
    background: transparent;

    padding: 15px 8px;
    border-bottom: 1px solid rgba(100, 150, 240, 1);
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 14px;
    }

    h2 {
      font-size: 14px;
    }
  }
  .content {
    overflow: hidden;
    font-size: 18px;
    background: white;
    margin: 0;
    width: 60%;
    min-width: 350px;
  }

  .content-wrapper {
    padding: 20px 8px 25px 8px;
  }
`
const data = [
  {
    title: 'How does the service work?',
    content: `Our straight to voicemail technology skips the phone conversation and goes directly to voicemail. Recipients will receive a voicemail from the caller ID you enter when sending out your campaign.`,
  },
  {
    title: 'How successful can I expect my campaigns to be?',
    content: `We’ll send your voicemail to all of the phone numbers you select. If any of the messages can’t be delivered, you’ll be able to see that in your dashboard. You are never charged for undelivered ringless voicemails. Many of our customers track their ROI when running campaigns, which we highly recommend.`,
  },
  {
    title: 'How often should I leave ringless voice messages?',
    content: `The best approach for you will depend on your goals. Many of our customers send out small batches daily. If you expect a lot of call backs coming directly to you, we recommend spreading out your voicemail deliveries and sending them in batches of about 100 at a time. You can schedule them to be sent throughout the day, week or month.`,
  },
  {
    title: 'How do I upload my list of phone numbers?',
    content: `To upload a recipient list, log in and vist the Manage Lists section of your account. Your phone number list must be saved as a Comma Delimited (.CSV) or a Tab Delimited (.TXT) file with your phone numbers in the first column only. Contact names, which are optional, can be included in the second column.

When uploading your list with contact names, be sure to check the box to indicate your file has contact names. Additionally, you can copy and paste your phone numbers in to the box provided on the website. On a Mac? Be sure to save your file as a Windows Formatted .TXT or .CSV file before uploading.`,
  },
  {
    title: 'Do I have to use all of my delivery credits at once?',
    content: `No, you do not. If you purchase 100 deliveries for $10, you can send them out one at a time, ten at a time, or all at once.

`,
  },
  {
    title: 'Where do other people get their lists?',
    content: `Customers, prospects who have provided their number, partners, colleagues, donors, etc. We hope you’ll call people who will want to hear your voice and your message. We do not provide recommendations for list buying, because that’s not the most effective use of our technology and not what it is designed for. We do not condone spamming people with unwanted voicemails or sending to people who would not want to hear from you. We take pride in the technology that we offer and it is important to us that it is used responsibly and respectfully.

`,
  },
  {
    title: 'Do my messages ever expire?',
    content: `
All Pay As You Go plan messages never expire.

Monthly Messaging plan credits are valid for 30 calendar days after your initial date of purchase and do not roll over towards the next month.`,
  },
  {
    title: 'What is your guarantee?',
    content: `We'll do everything in our power to make sure you are happy with the service. However, if you aren't completely satisfied with the Universal Dialers' service after your first campaign, we'll refund you. Just contact our Customer Care team`,
  },
]

class Faq extends React.Component {
  state = { open: false }

  render() {
    const { open } = this.state

    return (
      <>
        <h1
          style={{
            paddingLeft: '5%',
            marginTop: '75px',
            fontSize: '22px',
            color: 'rgba(100,100,200,1)',
          }}
        >
          Frequently Asked Questions
        </h1>
        <Accordians>
          {data.map(({ title, content }, i) => (
            <Fragment key={i}>
              <h2
                className="title"
                onClick={() =>
                  this.setState({
                    open: open === i ? false : i,
                  })
                }
              >
                {open === i ? (
                  <Icon color="blue" name="chevron circle up" />
                ) : (
                  <Icon name="chevron circle down" />
                )}
                {title}
              </h2>
              <Content
                className="content"
                pose={open === i ? 'open' : 'closed'}
              >
                <div className="content-wrapper">{content}</div>
              </Content>
            </Fragment>
          ))}
        </Accordians>
        <Questions />
        <Footer />
      </>
    )
  }
}

export default Faq

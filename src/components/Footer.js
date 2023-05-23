import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>this will be site navigation!</h5>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-linkedin'
                            href='https://www.linkedin.com/in/matthew-linsley-8107a1b6/'
                        >
                            <i className='fa fa-linkedin-square' />
                        </a>{' '}
                        {/* <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '} */}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/matt_linsley'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        {/* <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                        <br /> */}
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:phoenixstar117@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> phoenixstar117@gmail.com
                        </a>
                    </Col>
                    <Col sm='6' className='text-right'>
				        Photo of Raspberry Pi Pico RP2040 by <a href="https://unsplash.com/@vishnumaiea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vishnu Mohanan</a> on <a href="https://unsplash.com/photos/yC_7U1g3Kvs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        <br />
				        Photo of Code by <a href="https://unsplash.com/@hishahadat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shahadat Rahman</a> on <a href="https://unsplash.com/photos/BfrQnKBulYQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        <br />
				        Photo of abandoned building by <a href="https://unsplash.com/@sacreb1eu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sacre Bleu</a> on <a href="https://unsplash.com/photos/Dkcq9G4_pSc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;
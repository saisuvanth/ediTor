import Document, { Head, Main, NextScript, Html, DocumentContext } from "next/document";
import createEmotionCache from "../src/utils/createEmotionCache";
import createEmotionServer from '@emotion/server/create-instance'
import theme from "../src/utils/theme";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const originalRenderPage = ctx.renderPage;
		const cache = createEmotionCache();
		const { extractCriticalToChunks } = createEmotionServer(cache);

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App: any) =>
					function EnhanceApp(props) {
						return <App emotionCache={cache} {...props} />;
					},
			});

		const initialProps = await Document.getInitialProps(ctx);
		const emotionStyles = extractCriticalToChunks(initialProps.html);
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				data-emotion={`${style.key} ${style.ids.join(' ')}`}
				key={style.key}
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: style.css }}
			/>
		));

		return {
			...initialProps,
			emotionStyleTags,
		};
	}
	render() {
		return (
			<Html>
				<Head>
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					{(this.props as any).emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument;

import {Main} from "../../components/Main";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Center} from "../../components/Center/Center";
import {MiniMap} from "../../components/MiniMap/MiniMap";
import points from "../../public/source/placemarks.json";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {PlacemarkType} from "../../types/Placemark.type";

export const getServerSideProps  = (async ({params}) => {
    const response = await import(`../../public/source/articles/${params.id}.md`)
        .then(r => r.default)
        .catch(err => console.log(err));
    return { props: { response } }
})

const ArticlePage = ({response}) => {
    const { query } = useRouter();

    const [Point, setPoint] = useState([] || {} as PlacemarkType);

    useEffect(() => {
        setPoint(points.filter((item) => item.id == Number(query.id)) as PlacemarkType[]);
    }, [query])

    return (
        <Main title={Point[0]?.info?.title || "Загрузка"}>
            <Center>
                <MiniMap {...Point[0]} />
                <ReactMarkdown className="markdown" children={response} remarkPlugins={[remarkGfm]} />
            </Center>
        </Main>
    )
}

export default ArticlePage;
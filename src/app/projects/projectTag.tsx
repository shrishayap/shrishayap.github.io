interface ProjectTagProps {
    tag: 'personal project' | 'school club' | 'hackathon' | 'school' | 'hackathon winner';
}

export const ProjectTag = ({ tag }: ProjectTagProps) => {

    if (tag === 'personal project') {
        return (
            <div className='bg-blue-600 bg-opacity-75 p-1 text-white rounded border-2 w-fit border-blue-600'>
                <p className='text-xs font-bold'>Personal Project</p>
            </div>
        )
    }

    if (tag === 'school club') {
        return (
            <div className='bg-green-800 bg-opacity-75 p-1 text-white rounded border-2 w-fit border-green-800'>
                <p className='text-xs font-bold'>School Club</p>
            </div>
        )
    }

    if (tag === 'hackathon') {
        return (
            <div className='bg-yellow-700 bg-opacity-75 p-1 text-white rounded border-2 w-fit border-yellow-700'>
                <p className='text-xs font-bold'>Hackathon</p>
            </div>
        )
    }

    if (tag === 'school') {
        return (
            <div className='bg-red-600 bg-opacity-75 p-1 text-white rounded border-2 w-fit border-red-600'>
                <p className='text-xs font-bold'>School</p>
            </div>
        )
    }

    if (tag === 'hackathon winner') {
        return (
            <div className='bg-purple-700 bg-opacity-75 p-1 text-white rounded border-2 w-fit border-purple-700'>
                <p className='text-xs font-bold'>Hackathon Winner</p>
            </div>
        )
    }

}

export default ProjectTag